const PODCAST_TEAM_ID = '887413'

const Podcast = ({code}) => (
  <div className="mb-10">
    <iframe src={`https://www.buzzsprout.com/${PODCAST_TEAM_ID}/${code}?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/${PODCAST_TEAM_ID}/${code}.js?container_id=buzzsprout-player&player=small`} width="100%" height="200" frameBorder="0" scrolling="no"></iframe>
  </div>
)

export default Podcast

