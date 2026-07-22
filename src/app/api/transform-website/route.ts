import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()

    if (!url) {
      return NextResponse.json({ error: 'URL requerida' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key no configurada' }, { status: 500 })
    }

    const prompt = `Eres un consultor experto en datos e IA para negocios. Un cliente potencial compartió contigo la URL de su sitio web: ${url}

A partir de la URL y el dominio, infiere el tipo de empresa, la industria y los procesos de negocio que probablemente tenga. Genera un análisis de cómo GivraTech (una consultora de datos e IA) podría transformar esa empresa.

Responde ÚNICAMENTE con JSON válido con esta estructura exacta, sin texto adicional:
{
  "original": "Breve descripción de cómo se ve la empresa hoy (2-3 oraciones, lenguaje ejecutivo)",
  "improved": "Visión de cómo sería la empresa tras implementar soluciones de datos e IA con GivraTech (3-4 oraciones, enfocado en impacto de negocio)",
  "improvements": [
    "Mejora concreta 1 con impacto cuantificable",
    "Mejora concreta 2 con impacto cuantificable",
    "Mejora concreta 3 con impacto cuantificable",
    "Mejora concreta 4 con impacto cuantificable"
  ],
  "useCases": [
    {
      "title": "Nombre del caso de uso",
      "description": "Descripción de la solución en 2 oraciones",
      "kpi": "Impacto cuantificable esperado"
    },
    {
      "title": "Nombre del caso de uso 2",
      "description": "Descripción de la solución en 2 oraciones",
      "kpi": "Impacto cuantificable esperado"
    },
    {
      "title": "Nombre del caso de uso 3",
      "description": "Descripción de la solución en 2 oraciones",
      "kpi": "Impacto cuantificable esperado"
    },
    {
      "title": "Nombre del caso de uso 4",
      "description": "Descripción de la solución en 2 oraciones",
      "kpi": "Impacto cuantificable esperado"
    }
  ],
  "estimate": "Estimación de la inversión inicial y el plazo típico para una empresa de este tipo (1-2 oraciones, rango amplio, sin comprometer precios)"
}

Usa lenguaje profesional en español, enfócate en el impacto de negocio y evita la jerga técnica excesiva. Los KPIs deben ser concretos (porcentajes, tiempos, costos).`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!response.ok) {
      throw new Error(`Anthropic API error: ${response.status}`)
    }

    const data = await response.json()
    const content = data.content[0]
    if (content.type !== 'text') throw new Error('Invalid response')

    const raw = content.text.replace(/```json\n?|\n?```/g, '').trim()
    const result = JSON.parse(raw)

    return NextResponse.json(result)
  } catch (err) {
    console.error('Transform error:', err)
    return NextResponse.json(
      { error: 'No se pudo procesar la solicitud' },
      { status: 500 }
    )
  }
}
