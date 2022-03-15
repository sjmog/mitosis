const Repos = () => {
  const repos = []
  return (
    <>
      <h3>Repos</h3>
      <ul>
        { repos.map(repo => <li>{ repo.title }</li>) }
      </ul>
    </>
  )
}

export default Repos