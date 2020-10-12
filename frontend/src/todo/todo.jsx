import React, { Component } from 'react'
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodosList from './TodosList'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm />
                <TodosList />
            </div>
        )
    }
}