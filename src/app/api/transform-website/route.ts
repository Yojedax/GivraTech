import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()

    if (!url) {
      return NextResponse.json({ error: 'URL required' }, { status: 400 })
    }

    const apiKey = process.env.ANTHROPIC_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
    }

    const prompt = `You are an expert consultant in data & AI for business. A potential client shared the URL of their website with you: ${url}

Based on the URL and domain, infer the type of company, industry, and business processes they likely have. Generate an analysis of how GivraTech (a data & AI consulting firm) could transform that company.

Respond ONLY with valid JSON with this exact structure, no additional text:
{
  "original": "Brief description of how the company appears today (2-3 sentences, executive language)",
  "improved": "Vision of how the company would be after implementing data & AI solutions with GivraTech (3-4 sentences, focus on business impact)",
  "improvements": [
    "Concrete improvement 1 with quantifiable impact",
    "Concrete improvement 2 with quantifiable impact",
    "Concrete improvement 3 with quantifiable impact",
    "Concrete improvement 4 with quantifiable impact"
  ],
  "useCases": [
    {
      "title": "Name of the use case",
      "description": "Description of the solution in 2 sentences",
      "kpi": "Expected quantifiable impact"
    },
    {
      "title": "Name of use case 2",
      "description": "Description of the solution in 2 sentences",
      "kpi": "Expected quantifiable impact"
    },
    {
      "title": "Name of use case 3",
      "description": "Description of the solution in 2 sentences",
      "kpi": "Expected quantifiable impact"
    },
    {
      "title": "Name of use case 4",
      "description": "Description of the solution in 2 sentences",
      "kpi": "Expected quantifiable impact"
    }
  ],
  "estimate": "Estimate of initial investment and typical timeline for a company of this type (1-2 sentences, broad range, without committing to prices)"
}

Use professional English language, focus on business impact, avoid excessive technical jargon. KPIs should be concrete (percentages, times, costs).`

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
      { error: 'Could not process the request' },
      { status: 500 }
    )
  }
}
