const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <div>
      {props.name}: {props.exercises}
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.name} exercises={props.exercises} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        name={part1.name}
        exercises={part1.exercises}
        name2={part2.name}
        exercises2={part2.exercises}
        name3={part3.name}
        exercises3={part3.exercises}
      />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
