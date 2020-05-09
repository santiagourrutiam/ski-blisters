import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

const BottomButtonGroup = (props) => {
    return (
        <>
            <ButtonGroup color="primary" aria-label="outlined primary button group" orientation="horizontal">
                <Button
                    className="button" 
                    variant="contained" 
                    color="primary" 
                    onClick={ () => props.clickedVolcanos()}>Volcanos
                </Button>
                <Button
                    className="button"
                    variant="contained" 
                    onClick={props.clickedRoutes}>Routes
                </Button>
                <Button 
                    className="button"
                    variant="contained" 
                    color="primary" 
                    onClick={ () => props.clickedLocalAreas()}>Local Areas
                </Button>
                <Button 
                    className="button"
                    variant="contained" 
                    color="primary" 
                    onClick={ () => props.clickedSkiShops()}>Ski Shops
                </Button>
                <Button 
                    className="button"
                    variant="contained" 
                    color="primary" 
                    onClick={ () => props.clickedAvalancheAreas()}>Avalanche Areas
                </Button>
            </ButtonGroup>
        </>
    );
}

export default BottomButtonGroup;