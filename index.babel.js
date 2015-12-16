import React from 'react';

class Avatar extends React.Component{
  getColors(letter='default'){
    const colors = {
        'a': { background: '#f06292', color: '#f9c2d5' },
        'b': { background: '#ba68c8', color: '#e1bee7' },
        'c': { background: '#9575cd', color: '#d1c4e9' },
        'd': { background: '#7986cb', color: '#c5cae9' },
        'e': { background: '#5e97f6', color: '#bdd4fb' },
        'f': { background: '#4fc3f7', color: '#c2eafd' },
        'g': { background: '#4dd0e1', color: '#c9f1f6' },
        'h': { background: '#4db6ac', color: 'rgba(255,255,255,.7)' },
        'i': { background: '#57bb8a', color: '#b1dec9' },
        'j': { background: '#9ccc65', color: '#dcedc8' },
        'k': { background: '#d4e157', color: '#f9fbe7' },
        'l': { background: '#fdd835', color: '#fffbde' },
        'm': { background: '#f6bf26', color: '#fce8b2' },
        'n': { background: '#ffa726', color: '#ffe0b2' },
        'o': { background: '#ff8a65', color: '#ffccbc' },
        'p': { background: '#c2c2c2', color: '#f1f1f1' },
        'q': { background: '#90a4ae', color: '#cfd8dc' },
        'r': { background: '#e06055', color: '#f5cdc9' },
        's': { background: '#a1887f', color: '#d7ccc8' },
        't': { background: '#a3a3a3', color: '#e1e1e1' },
        'u': { background: '#afb6e0', color: '#e8eaf6' },
        'v': { background: '#b39ddb', color: '#ede7f6' },
        'x': { background: '#80deea', color: '#e9f9fb' },
        'y': { background: '#bcaaa4', color: '#e7e0de' },
        'z': { background: '#aed581', color: '#dcedc8' },
        'w': { background: '#9575cd', color: '#d1c4e9' },
        'default': { background: '#eee', color: '#666' },
      };
      return colors[letter];
  }
  getAvatar(){
    const words = this.props.name.split(' ');
    const firstWord = words[0];
    const firstLetter = firstWord[0];
    if(words.length > 1){
      const secondWord = (words[1].length <= 3 && typeof words[2] != 'undefined') ? words[2] : words[1];
      const secondLetter = secondWord[0];
      return {
        firstLetter: firstLetter.toLowerCase(),
        initials: firstLetter+secondLetter.toUpperCase()
      }
    } else {
      const secondLetter = firstWord[1];
      return {
        firstLetter: firstLetter.toLowerCase(),
        initials: firstLetter+secondLetter.toUpperCase()
      }
    }
  }
  render(){
    const {
      firstLetter,
      initials
    } = this.getAvatar();
    const {
      color,
      background
    } = this.getColors(firstLetter);
    return (
      <div
          style={{
            background,
            color,
            width: this.props.width,
            height: this.props.height,
            display: 'inline-block',
            fontSize: '130%',
            letterSpacing: '-.4px',
            fontWeight: 'bold',
            borderRadius: '5px',
            textAlign: 'center',
            lineHeight: '200%',
            overflow: 'none'
          }}
          className="avatar">
          {initials}
      </div>
    )
  }
}

Avatar.propTypes = {
  name: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

Avatar.defaultProps = {
  width: 35,
  height: 35
}

export default Avatar;
