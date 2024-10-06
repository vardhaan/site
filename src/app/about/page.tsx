import { Box, Typography } from "@mui/material";


const Page = () => {
    return (
        <Box mt={5} ml={2}>
            <Typography variant={"h2"} gutterBottom>
                Hamsa
            </Typography>
            <Typography ml={10} variant="h6">
                <ul>
                    <li>
                        Hamsa Pillai
                    </li>
                    <li>
                        SF (technically Temescal in Oakland, but close enough)
                    </li>
                    <li>
                        Did a news startup (<a href="https://www.airvue.ai/">Airvue</a>), found traction in a niche, but no path beyond
                    </li>
                    <li>
                        Was an APM at Google on Maps & Assistant. Highlight: worked on LLMs (in the ancient davinci-002 days), specifically safety for <a href="https://arxiv.org/abs/2201.08239">LaMDA</a> in Assistant
                    </li>
                    <li>
                        Pizza 👍, love my Ooni. Johns of Bleecker 🐐, but Outta Sight in SF is awesome too
                    </li>
                    <li>
                        todo: add more info + a pic
                    </li>
                </ul>
            </Typography>
        </Box>
    )
}

export default Page;