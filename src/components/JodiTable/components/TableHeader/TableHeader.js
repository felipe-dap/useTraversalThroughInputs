import React from "@types/react";


export default function TableBody() {

    return (
        <thead>
            <Grid item component="tr" sx={{display: 'flex', justifyContent: 'space-between'}}>
                <StyledOpen>Open</StyledOpen>
                <StyledJodi>Jodi</StyledJodi>
                <StyledClose>Close</StyledClose>
            </Grid>
        </thead>
    )
}
