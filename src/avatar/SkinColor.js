import Avatar1 from '../../assets/avatar/Avatar1';
import Avatar2 from '../../assets/avatar/Avatar2';
import Avatar3 from '../../assets/avatar/Avatar3';
import Avatar4 from '../../assets/avatar/Avatar4';
import Avatar5 from '../../assets/avatar/Avatar5';

export default function SkinColor({skinOption}) {
    switch (skinOption) {
        case 1:
          return <Avatar1 />;
        case 2:
          return <Avatar2 />;
        case 3:
          return <Avatar3 />;
        case 4:
          return <Avatar4 />;
        case 5:
          return <Avatar5 />;
    }
}