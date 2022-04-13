import React from "react";

export default function TableBody() {


    return (
        <tbody id="table-body">
        {openClose.map((open, index) => {
            const jodis = jodi.splice(0, 10);
            // eslint-disable-next-line prefer-const
            let indexJodi = index * 10;

            return (
                <tr key={open} id={row[index]}>
                    <Grid item xs={1} md={1} xl={1} component="td">
                        <label htmlFor={`OPEN_${open}`}>{open}</label>
                        <StyledOpenInput type="text" id={column[index]} name={`OPEN_${open}`}/>
                    </Grid>
                    {jodis.map((jodi, indexJ) => (
                        <Grid item key={indexJodi + indexJ} xs={1} md={1} xl={1} component="td">
                            <label htmlFor={`Jodi_${jodi}`}>{jodi}</label>
                            <StyledInput type="text" id={column[index]} name={`Jodi_${jodi}`}/>
                        </Grid>
                    ))}
                    <Grid item key={open + 2} xs={1} md={1} xl={1} component="td">
                        <label htmlFor={`CLOSE_${open}`}>{open}</label>
                        <StyledCloseInput type="text" id={column[index]} name={`CLOSE_${open}`}/>
                    </Grid>
                </tr>
            );
        })}
        </tbody>
    )
}
