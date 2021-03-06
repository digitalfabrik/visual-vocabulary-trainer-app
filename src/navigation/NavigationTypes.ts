import { DocumentsType, DocumentType } from '../constants/endpoints'
import { ExerciseKeyType, ResultType, SimpleResultType } from '../constants/data'

export interface DocumentResultType extends DocumentType {
  result: SimpleResultType
}

export type CountsType = {
  [key in SimpleResultType]: number
} & {
  total: number
}

// https://github.com/Microsoft/TypeScript/issues/15300
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RoutesParamsType = {
  Profession: undefined
  ProfessionSubcategory: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
    }
  }
  Exercises: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
    }
  }
  VocabularyList: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
  }
  WordChoiceExercise: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
  }
  ArticleChoiceExercise: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
  }
  WriteExercise: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
    retryData?: { data: DocumentsType }
  }
  InitialSummary: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
      results: DocumentResultType[]
    }
    retryData?: { data: DocumentsType }
  }
  ResultsOverview: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
    retryData?: { data: DocumentsType }
    results: DocumentResultType[]
  }

  CorrectResults: undefined
  IncorrectResults: undefined
  AlmostCorrectResults: undefined
  ResultScreen: {
    extraParams: {
      disciplineID: number
      disciplineTitle: string
      disciplineIcon: string
      trainingSetId: number
      trainingSet: string
      exercise: ExerciseKeyType
      exerciseDescription: string
      level: number
    }
    retryData?: { data: DocumentsType }
    results: DocumentResultType[]
    resultType: ResultType
    counts: CountsType
  }
}
