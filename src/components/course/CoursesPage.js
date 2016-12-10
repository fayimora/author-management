import React from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: {title: ""}
    };
    this.onTitleChanged = this.onTitleChanged.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChanged(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    alert(`Saved ${this.state.course.title}`);
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>

        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChanged}
          value={this.state.course.title}/>

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave}/>
      </div>
    );
  }
}

export default CoursesPage;
