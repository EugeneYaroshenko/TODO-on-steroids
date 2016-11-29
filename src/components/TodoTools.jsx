import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import cn from 'classnames'



export default class TodoTools extends Component {
  constructor(props) {
    super(props)

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.itemsLeft = this.itemsLeft.bind(this)
    this.isSelected = this.isSelected.bind(this)
    this.setSelectedClass = this.setSelectedClass.bind(this)
  }

  itemsLeft() {
    return this.props.getActiveItems || 0
  }

  isSelected(filter) {
    return this.props.selectedFilter === filter || false
  }

  setSelectedClass(filter) {
    return cn({'selected': this.props.filter === filter})
  }

  render() {

    return (
     <footer className="todo__footer">
       <span className="todo__footer-count">
         <strong>{this.itemsLeft()}</strong> items left
       </span>
       <ul className="todo__footer-filters">
         <li>
           <a href="#"
              onClick={() => this.props.changeFilter('all')}
              className={this.setSelectedClass('all')}>
              All
            </a>
         </li>
         <li>
           <a href="#"
              onClick={() => this.props.changeFilter('active')}
              className={this.setSelectedClass('active')}>
              Active
            </a>
         </li>
         <li>
           <a href="#"
              onClick={() => this.props.changeFilter('completed')}
              className={this.setSelectedClass('completed')}>
              Completed
            </a>
         </li>
       </ul>
       <button className="todo__footer-clear"
               onClick={this.props.clearCompleted}>
         Clear completed
       </button>
     </footer>
    )
  }

}
