import React, {Component} from 'react'
import { connect } from 'react-redux';

class BookList extends Component {
    
    renderList() {
              
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
                );
        });
    }
  
    
    render() {
        return (
            <ul className="list-group col-sm-4">
              {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // whatever is returned will show up as props inside of BookList
    // glue btwn React and Redux
    return {
        books: state.books  
    };
}

//create container
//  takes function, component
export default connect(mapStateToProps)(BookList);