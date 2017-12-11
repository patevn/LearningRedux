import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
    //dispatch below fires off actions
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />

                <input type="submit"
                    value="Save"
                    onClick={this.onClickSave} />
            </div>
        );
    }
}

// this  makes state avalaible (as props) to this page
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}



//this decorated export syntax is to connect react to this page so they can interact
//it looks like shit but what is doing is the first connect call returns a functionn which call the function on the right
export default connect(mapStateToProps)(CoursesPage);

