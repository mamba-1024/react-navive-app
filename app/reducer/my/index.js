
import { CHANGE_NUMBER, changeNumber } from '../../action/my/index';

/**
 * 初始化状态值
 * **/
const initialState = {
    targetText: 'my first React-Native App',
    number: 0,
    targetKey: 3
}
/**
 * reducer函数
 * **/
export const myReducer = (state = initialState, action) => {
    const data = action.param;
    switch (action.type) {
        case CHANGE_NUMBER: {
            return Object.assign({}, state, {
                number: data
              })
        }
        default: return state;
    }
}