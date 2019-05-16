// import React, { Component } from 'react'
// import { getRequest } from '../requests'
// import FlashcardDetail from './FlashcardDetail'

// class FlashcardContainer extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       flashcards: [],
//       currentIndex: 0
//     }

//     this.handleKeyUp = this.handleKeyUp.bind(this)
//     this.next = this.next.bind(this)
//   }

//   next() {
//     let nextIndex = (this.state.currentIndex + 1) !== this.state.flashcards.length
//       ? this.state.currentIndex + 1
//       : this.state.currentIndex

//     this.setState({ currentIndex: nextIndex })
//   }

//   prev() {
//     let prevIndex = (this.state.currentIndex - 1) < 0
//       ? 0
//       : (this.state.currentIndex - 1)
//     this.setState({ currentIndex: prevIndex })
//   }

//   handleKeyUp(event) {
//     if (event.keyCode === 39) this.next()
//     if (event.keyCode === 37) this.prev()
//   }

//   componentDidMount() {
//     window.addEventListener('keyup', this.handleKeyUp)

//     getRequest.then(response => {
//       this.setState({ flashcards: response.data })
//     })
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.handleKeyUp)
//   }

//   render() {
//     let flashcard = this.state.flashcards[this.state.currentIndex]
//     return (
//       <div>
//         <main>
//           <div className='container'>
//             {flashcard &&
//               <FlashcardDetail card={flashcard} onTimerEnd={this.next} />}
//           </div>
//         </main>
//       </div>
//     )
//   }
// }

// export default FlashcardContainer
