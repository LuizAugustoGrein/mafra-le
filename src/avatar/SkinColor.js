import Avatar1 from '../../assets/avatar/Avatar1';
import Avatar2 from '../../assets/avatar/Avatar2';
import Avatar3 from '../../assets/avatar/Avatar3';
import Avatar4 from '../../assets/avatar/Avatar4';
import Avatar5 from '../../assets/avatar/Avatar5';

export default function SkinColor({skinOption}) {
  return (
    <>
      {skinOption == 1 && <Avatar1 />}
      {skinOption == 2 && <Avatar2 />}
      {skinOption == 3 && <Avatar3 />}
      {skinOption == 4 && <Avatar4 />}
      {skinOption == 5 && <Avatar5 />}
    </>
  );
}