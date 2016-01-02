// Simple, slimline template based on https://github.com/rackt/react-router/blob/master/CHANGES.md

import Default from './Default'

export default class Compact extends Default {
  mergesTitle = null
  fixesTitle = null
  commitsTitle = null

  fixPrefix = 'Fixed '
  mergePrefix = 'Merged '

  listSpacing = '\n'

  renderReleaseHeading = (release, previousRelease) => {
    const title = this.renderReleaseTitle(release, previousRelease)
    const date = release.tag ? `\n> ${formatDate(release.date)}` : ''
    return `### ${title}${date}\n`
  }
}

function formatDate (string) {
  const date = new Date(string)
  const day = date.getDate()
  const month = date.toLocaleString('en', { month: 'long' })
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}