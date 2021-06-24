import React, { useEffect } from 'react';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik, useFormik } from 'formik'


const useStyles = makeStyles((theme) => ({
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function QuitzTest(props) {
    const { questions, answers, changeAnswers, changeValues, handleClose } = props;
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            answer0: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
        },
        onSubmit: values => {
            const res = Object.values(values);
            changeValues(res)
        },
    });

    useEffect(() => {
        setAllAnswers()
    }, [questions])

    const setAllAnswers = () => {
        const arr = []
        questions.map((item) => arr.push([...item.incorrect_answers, item.correct_answer]))
        changeAnswers(arr)
    }

    const answerIdx = (idx) => {
        return answers[idx].map((answer, i) =>
            <FormControlLabel key={i} control={<Radio />} label={answer} value={answer} />
        )
    }
    const isAnswerPositive = () => answers.length === 0

    return (
        <>
            <Formik>
                {() => (
                    <Form onSubmit={formik.handleSubmit}>
                        {questions.map((item, idx) => (
                            <FormControl key={idx} component="fieldset">
                                <FormLabel component="legend"><p dangerouslySetInnerHTML={{ __html: item.question }} /></FormLabel>
                                <RadioGroup name={`answer${idx}`} required onChange={formik.handleChange} >
                                    {isAnswerPositive() ? "loading" : answerIdx(idx)}
                                </RadioGroup>
                            </FormControl>
                        ))}
                        <br />
                        <ButtonGroup className={classes.btn} color="primary" aria-label="outlined primary button group">
                            <Button type='submit' variant="contained">
                                Submit
                            </Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </ButtonGroup>
                    </Form>
                )}
            </Formik>
        </>
    )
}



