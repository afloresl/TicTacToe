import { Types } from '../config/Types';

export const tableroReducer = (state = {}, action) =>
{
    switch ( action.type )
    {
        case Types.TableroJugada:
            return {
                ...state,
                celdas: action.payload,
            }

        default:
            return state
    }
}
