import { Typography } from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">Hello what is happening</Typography>
        <Typography variant="h2">Hello what is happening</Typography>
        <Typography variant="h3">Hello what is happening</Typography>
        <Typography variant="h4">Hello what is happening</Typography>
        <Typography variant="h5">Hello what is happening</Typography>
        <Typography variant="h6">Hello what is happening</Typography>

        {/* //here subtitle is h6 but their body font is different. */}
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitlte2</Typography>

        {/* //we use body variant for different size and font for body both have paragraph text  */}
        <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nihil, voluptas et cupiditate maxime ratione sit voluptate necessitatibus debitis dolorem eveniet a maiores quis nemo.
        </Typography>
        <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil reprehenderit illo autem magni repellat nemo, fugit eos harum quis voluptatum molestias omnis ad a!
        </Typography>

        {/* you can change the semantic element using component prop(same sizes but tag is h1) : gutterBottom has bottom margin */}
        <Typography variant='h4' component='h1' gutterBottom>Hello what is here</Typography>
        
    </div>
  )
}

export default MuiTypography