import { call, put, takeEvery } from "redux-saga/effects"
import { getCatsSuccess } from "./catState"

function* workGetCatsSuccess() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"))
  const formattedCats = yield cats.json()

  const formattedCatsShortened = formattedCats.slice(0, 10)

  yield put(getCatsSuccess(formattedCatsShortened))
}

// generator
function* catSaga() {
  // reducer_name / reducer_name
  yield takeEvery("cats/getCatsFetch", workGetCatsSuccess)
}

export default catSaga
