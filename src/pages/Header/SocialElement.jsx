function SocialElement(props) {
  try {
    return (
      <>
        <a href={props.href} target="_blank">
          {props.icon}
        </a>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default SocialElement;
