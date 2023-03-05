import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

interface SkeletonProps {
  width: string;
  height: string;
}

const shine = keyframes`
    to {
      // Move shine from left to right, with offset on the right based on the width of the shine - see background-size
      background-position: right -40px top 0;
    }
`;

const Skeleton = styled.div<SkeletonProps>`
  position: absolute;
  top: 0;
  left: 0;

  background-color: #e2e5e7;
  // The shine that's going to move across the skeleton:
  background-image: linear-gradient(90deg, #ffffff00, #ffffff60, #ffffff00);
  background-size: 50px 100%; // width of the shine
  background-repeat: no-repeat; // No need to repeat the shine effect
  background-position: left -40px top 0; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
  animation: ${shine} 1s ease-in-out infinite; // increase animation time to see effect in 'slow-mo'

  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export { Skeleton };
