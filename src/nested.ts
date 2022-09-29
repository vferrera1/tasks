import { urlToHttpOptions } from "url";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects"

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question: Question): boolean => question.published
    );
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const identifiedQuestion = questions.find((question: Question): boolean => question.id === id);
    return identifiedQuestion ? identifiedQuestion : null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(
        (question: Question): boolean => question.id !== id
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question: Question): string => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    return questions.reduce(
        (currentPoints: number, question: Question) =>
            currentPoints + question.points,
        0
    );
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedQuestions.reduce(
        (currentTotal: number, question: Question): number =>
            currentTotal + question.points,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const csvHeader = "id,name,options,points,published\n";
    //Newline character should be removed if using reduce function. Keep it for the map function.
    /*const csvBody: string = questions.reduce(
        (currentCSV: string, question: Question): string =>
            `${currentCSV}\n${question.id},${question.name},${question.options.length},${question.points},${question.published}`,
        ""
    );
    */
    const csvBody: string = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return csvHeader + csvBody;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    //Question: Do I have to make a separate function above to create an Answer?
    /*Answer: Nope! You HAVE to remember to put () around the {}
     *when you're referencing an object inside a function definition!
     */
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    } else {
        const firstQuestionType = questions[0].type;
        return questions.every(
            (question: Question): boolean => question.type === firstQuestionType
        );
    }
    /*const allMult: boolean = questions.every(
        (question: Question): boolean =>
            question.type === "multiple_choice_question"
    );
    const allShort: boolean = questions.every(
        (question: Question): boolean =>
            question.type === "short_answer_question"
    );
    return allMult || allShort;
    */
    //Is there a way to consolidate this function? What if there were many different question types?
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    /*const targetQuestion = questions.find(
        (question: Question): boolean => question.id === targetId
    );
    if (targetQuestion === undefined) {
        return questions;
    } else {
        const targetQuestionIndex = questions.findIndex(
            (question: Question): boolean => question.id === targetId
        );
        const renammedQuestion = { ...targetQuestion, name: newName };
        const edittedList = [...questions];
        edittedList.splice(targetQuestionIndex, 1, renammedQuestion);
        return edittedList;
    }
    */
    //Step 1: Check id of questions (find question that matches id to target id)
    //Step 2: Change name of question that was matched
    return questions.map(
        (question: Question): Question =>
            question.id === targetId ? { ...question, name: newName } : question
    );
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    //Passes condition? Do two things:
    // 1) Change the question's type
    // 2) Set "options" to an empty list if type is no longer multiple choice
    function changeQuestionType(question: Question): Question {
        const alteredQuestion = { ...question, type: newQuestionType };
        return alteredQuestion.type !== "multiple_choice_question"
            ? { ...alteredQuestion, options: [] }
            : alteredQuestion;
    }
    return questions.map(
        (question: Question): Question =>
            question.id === targetId ? changeQuestionType(question) : question
    );
    return [];
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    //Passes condition? Do these things:
    // 1). Evaluate targetOptionIndex
    // 2). Place newOption into options array depending on targetOptionIndex
    function addNewOption(question: Question): Question {
        if (targetOptionIndex === -1) {
            //newOption should be added to end of option list in question
            const expandedQuestion = {
                ...question,
                options: [...question.options, newOption]
            };
            return expandedQuestion;
        } else {
            //newOption should replace existing element at targetOptionIndex
            const expandedQuestion = {
                ...question,
                options: [...question.options]
            };
            expandedQuestion.options.splice(targetOptionIndex, 1, newOption);
            return expandedQuestion;
        }
        return question;
    }
    return questions.map(
        (question: Question): Question =>
            question.id === targetId ? addNewOption(question) : question
    );
    return [];
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    //Clone the question array first (Deep clone)
    function deepCloneQuestions(questions: Question[]): Question[] {
        return questions.map(
            (question: Question): Question => ({
                ...question,
                options: [...question.options]
            })
        );
    }
    const clonedQuestions = deepCloneQuestions(questions);
    const targetQuestionIndex = clonedQuestions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    clonedQuestions.splice(
        targetQuestionIndex+1,
        0,
        duplicateQuestion(newId, clonedQuestions[targetQuestionIndex])
    );
    return clonedQuestions;
}
