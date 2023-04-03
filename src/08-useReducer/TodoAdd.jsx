import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const TodoAdd = (props) => {
    const { onNewTodo } = props;
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return;
        const item = {
            id: new Date().getTime(),
            description,
            done: false
        }
        onNewTodo(item);
        onResetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="description"
                placeholder="Qué hay que hacer?"
                className="form-control"
                value={description}
                onChange={onInputChange} />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1" >
                Agregar
            </button>
        </form>
    )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func
}
