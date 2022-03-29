import React, {useState} from 'react';
import Switch from 'react-switch';

import styles from './StyledSwitch.module.scss';

const StyledSwitch = ({callback, width, height, handleDiameter, borderRadius}) => {
    const [checked, setChecked] = useState(false);

    const handleChange = nextChecked => {
      setChecked(nextChecked);
      callback && callback(nextChecked);
    };
    
    return (
        <Switch
            onChange={handleChange}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor={styles.onColor}
            offColor={styles.offColor}
            activeBoxShadow="0 0 0 0 #fff"
            borderRadius={borderRadius}
            height={height}
            width={width}
            handleDiameter={handleDiameter}
            className="react-switch"
        />
    );
};

StyledSwitch.defaultProps ={
    width: 32,
    height: 16, 
    handleDiameter: 12, 
    borderRadius: 80
}

export default StyledSwitch;