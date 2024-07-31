/*
convert an object like this
{
    '0': {
      createdAt: '2024-06-20T13:00:13.002Z',
      senderId: 'ykmX7DdYK1z/0k+HhczYSOYvr+DTRWsaFRfJrElxzDpGTYNggEKyiygFLpfPRkQe2ipX3stKbD3J+pM60AqVRQ==',
      body: "Thank you for sharing your self-assessment. Let's start by understanding which part of the assessment you found most intriguing or challenging. What stood out to you the most in your self-assessment?",
      contentType: 'text'
    },

}

to string like this

Agent says: Thank you for sharing your self-assessment. Let's start by understanding which part of the assessment you found most intriguing or challenging. What stood out to you the most in your self-assessment?

*/

const AGENT_ID =
  "ykmX7DdYK1z/0k+HhczYSOYvr+DTRWsaFRfJrElxzDpGTYNggEKyiygFLpfPRkQe2ipX3stKbD3J+pM60AqVRQ==";

export function convertObjToLongString(messages, NUM_OF_PAST_CONVERSATIONS) {
  const cleanedData = Object.keys(messages).map((key) => {
    const message = messages[key];
    return {
      role: message.senderId === AGENT_ID ? "assistant" : "user",
      content: message.body,
    };
  });

  // keep the NUM_OF_PAST_CONVERSATIONS of past conversatiosn to include in the email

  const slicedData = cleanedData.slice(-NUM_OF_PAST_CONVERSATIONS);
  let formattedString = "";
  for (const message of slicedData) {
    if (message.role === "assistant") {
      formattedString += `Athena says: ${message.content}\n`;
    } else if (message.role === "user") {
      formattedString += `Client says: ${message.content}\n`;
    }
  }
  return formattedString;
}
