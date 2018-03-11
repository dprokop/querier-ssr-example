export type ActionWithMandatoryPayload<T> = ReduxActions.Action<T> & { payload: T };
