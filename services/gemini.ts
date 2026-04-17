const API_KEY = process.env.GEMINI_API_KEY || '';

const SYSTEM_PROMPT = `Eres el asistente virtual de Milena Sandoval, neuro-experta en alta performance y CEO de Evolucione Leyendo. 
Tu rol es ayudar a los visitantes con:
- Ejercicios rápidos de gimnasia cerebral
- Tips de lectura rápida y retención
- Información sobre los programas de Evolucione (lectura rápida, metaprendizaje)
- Información sobre el curso EMA (Exponencialmente Ágil - Gimnasia Cerebral)
- El Club de Lectura
- Talleres y conferencias para empresas y escuelas

Responde siempre en español, de forma amigable, concisa y motivadora. 
Usa emojis ocasionalmente para dar energía a tus respuestas.
Si te preguntan algo fuera de tu ámbito, redirige amablemente hacia los temas de neuroaprendizaje.
Mantén las respuestas cortas (máximo 3-4 oraciones).`;

export async function getNeuroAdvice(userMessage: string): Promise<string> {
  if (!API_KEY) {
    return getOfflineResponse(userMessage);
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_PROMPT}\n\nUsuario: ${userMessage}` }],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 300,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || getOfflineResponse(userMessage);
  } catch (error) {
    console.error('Gemini API error:', error);
    return getOfflineResponse(userMessage);
  }
}

function getOfflineResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes('ejercicio') || lower.includes('rápido') || lower.includes('🧠')) {
    return '🧠 ¡Aquí va uno rápido! Levanta tu mano derecha y toca tu oreja izquierda, luego cambia: mano izquierda a oreja derecha. Repite 10 veces lo más rápido que puedas. Esto activa ambos hemisferios cerebrales y mejora tu coordinación. ¿Lo intentaste?';
  }

  if (lower.includes('lectura') || lower.includes('leer') || lower.includes('libro') || lower.includes('📚')) {
    return '📚 Tip de lectura rápida: Usa tu dedo como guía visual mientras lees. Esto puede aumentar tu velocidad hasta un 30% de inmediato. El truco está en que tu ojo sigue el movimiento, eliminando las regresiones involuntarias. ¡Pruébalo ahora mismo!';
  }

  if (lower.includes('evolucione') || lower.includes('programa') || lower.includes('curso') || lower.includes('🚀')) {
    return '🚀 Evolucione Leyendo es el programa de metaprendizaje más completo de Latinoamérica. Con más de 10,000 graduados, aprenderás a leer 3x más rápido con 100% de comprensión. Hay programas para niños, jóvenes y adultos. ¡Visita evolucioneleyendo.mx para más info!';
  }

  if (lower.includes('enfoque') || lower.includes('concentr') || lower.includes('café') || lower.includes('☕')) {
    return '☕ Para máximo enfoque: Antes de empezar una tarea, haz 3 respiraciones profundas (4 segundos inhala, 4 sostén, 6 exhala). Luego, aprieta los puños 5 segundos y suelta. Esto activa tu corteza prefrontal y te pone en modo "alto rendimiento". ¡Tu cerebro está listo!';
  }

  if (lower.includes('ema') || lower.includes('gimnasia')) {
    return '💪 EMA (Exponencialmente Ágil) es el método de gimnasia cerebral de Milena. Combina ejercicios de coordinación bilateral, activación del lóbulo frontal y técnicas de enfoque. Es perfecto para profesionales que quieren máximo rendimiento mental. ¡Disponible en Hotmart!';
  }

  if (lower.includes('club')) {
    return '📖 El Club de Lectura de Milena es una comunidad increíble donde leemos con propósito. Cada mes seleccionamos un libro, hacemos sesiones en vivo y ejercicios de comprensión. Es como un gimnasio, ¡pero para tu mente! ¿Te gustaría unirte?';
  }

  return '✨ ¡Gracias por tu interés! Puedo ayudarte con ejercicios de gimnasia cerebral, tips de lectura rápida, información sobre Evolucione o el curso EMA. ¿Qué te gustaría explorar? Tu cerebro tiene un potencial infinito — solo necesitas saber cómo activarlo 🧠';
}
