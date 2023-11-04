const randomId = () => Math.random().toString();

const createEmployee = (name, position, department, salary) => ({
    id: randomId(),
    name,
    position,
    department,
    salary,
});

const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
};

export const actionCreators = {
    add: (name, position, department, salary) => ({
        type: types.ADD,
        payload: createEmployee(name, position, department, salary),
    }),
    remove: (id) => ({ type: types.REMOVE, payload: id }),
};

export const initialState = {
    teams: [
        createEmployee('John Doe', 'Software Engineer', 'Engineering', 75000),
        createEmployee('Jane Smith', 'Sales Manager', 'Sales', 90000),
        createEmployee('Michael Johnson', 'HR Specialist', 'Human Resource', 60000),
    ],
};

export function reducer(state, action) {
    switch (action.type) {
        case types.ADD:
            return { ...state, teams: [...state.teams, action.payload] };
        case types.REMOVE:
            return {
                ...state,
                teams: state.teams.filter((team) => team.id !== action.payload),
            };
        default:
            return state; // Add a return statement for the default case
    }
}
