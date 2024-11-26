import "./NavigationBar.scss";
// Font styles
import { LinearGradient } from 'react-text-gradients';

const NavigationBar = () => {
  return(
    <div id="navigationBar">
      <div className="navigationBar-content">
        <div className="navigationBar-brand">
          <LinearGradient gradient={['to left', 'steelblue ,black']}>
            Dev Portfolio
          </LinearGradient>
        </div>
      </div>
    </div>
  )
};

export default NavigationBar;