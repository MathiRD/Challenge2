import { LinearGradient } from 'expo-linear-gradient';

const BackGround = ({ children }) => {
    return (
      <LinearGradient
      colors={['#000', 'transparent']}
      style= {{
        flex: 1,
      }}>
        {children} 
      </LinearGradient>
    );
  }

  export default BackGround;