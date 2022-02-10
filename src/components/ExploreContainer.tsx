// import './ExploreContainer.css';

// interface ContainerProps { }

// const ExploreContainer: React.FC<ContainerProps> = () => {
//   return (
//     <div className="container">
//       <strong>Ready to create an app?</strong>
//       <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
//     </div>
//   );
// };

// export default ExploreContainer;


import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      {/* <strong>{name}</strong> */}
      {/* <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p> */}
    </div>
  );
};

export default ExploreContainer;
