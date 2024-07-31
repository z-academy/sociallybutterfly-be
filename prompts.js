const v0_0_1 = (
  profiles
) => `Act as a networking expert. Your task is to help me identify the similarities between the following profiles and generate interesting and engaging questions based on these commonalities and points of interest for conversation starters.

Requirements that you must obey:
1. The questions should be easy and not too challenging since they are meant to be ice breakers, but they should still be interesting.
2. Additionally, explain why you generated each question based on the profiles.
3. Please use the following JSON format for the output:

{
    "similarities": "keyword 1, keyword 2, keyword 3",
    "iceBreakingQuestions (profile 1 to profile 2)": ["Q1", "Q2", "Q3"],
    "explanations (profile 1 to profile 2)": ["E1", "E2", "E3"],
    "iceBreakingQuestions (profile 2 to profile 1)": ["Q1", "Q2", "Q3"]
    "explanations (profile 2 to profile 1)": ["E1", "E2", "E3"],
}

"""

Here's the profiles

${profiles}


"""

Your output:

`;

export { v0_0_1 };
