function Display(props) {
  return (
    <div className="content">
        <div className="name">{props.name}</div>
        <div className="email">{props.email}</div>
        <hr />
    </div>
  )
}

export default Display