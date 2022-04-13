import useTraversalThroughInputs from "~/hooks/useTraversalThroughInputs";
import {useEffect} from "react";
import {makeCell} from "~/constants/jodi";
import {TableBody, TableHeader} from "./components";

function Table({ jodiArr = [] }) {
    // eslint-disable-next-line prefer-const
    const current = useTraversalThroughInputs(makeCell(1, 1));

    useEffect(() => {
        console.log("teste", current)
    }, [current]);

    // const openClose = jodi.slice(0, 10);


    return (
        <>
            <Grid container spacing={1} component="table" direction="column" justifyContent="space-between">
                <TableHeader/>
                <TableBody/>
            </Grid>
        </>
    );
}