import {Types} from "../config/Types";

export const setJugadas = () =>
{
    return async (dispatch) =>
    {
        try
        {
            dispatch(Jugada(response));
        }

        catch (err)
        {
            throw  err
        }
    }
}

export const Jugada = (tiro) =>
{
    return {
        type: Types.TableroJugada,
        payload: tiro
    }
}
