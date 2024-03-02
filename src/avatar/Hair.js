import Ponytail1 from '../../assets/avatar/hair/ponytail/Ponytail1';
import Ponytail2 from '../../assets/avatar/hair/ponytail/Ponytail2';
import Ponytail3 from '../../assets/avatar/hair/ponytail/Ponytail3';
import Ponytail4 from '../../assets/avatar/hair/ponytail/Ponytail4';
import Ponytail5 from '../../assets/avatar/hair/ponytail/Ponytail5';
import Ponytail6 from '../../assets/avatar/hair/ponytail/Ponytail6';
import Ponytail7 from '../../assets/avatar/hair/ponytail/Ponytail7';
import Ponytail8 from '../../assets/avatar/hair/ponytail/Ponytail8';
import Ponytail9 from '../../assets/avatar/hair/ponytail/Ponytail9';
import Ponytail10 from '../../assets/avatar/hair/ponytail/Ponytail10';

export default function Hair({hairColor}) {
  return (
    <>
      {hairColor == 1 && <Ponytail1 />}
      {hairColor == 2 && <Ponytail2 />}
      {hairColor == 3 && <Ponytail3 />}
      {hairColor == 4 && <Ponytail4 />}
      {hairColor == 5 && <Ponytail5 />}
      {hairColor == 6 && <Ponytail6 />}
      {hairColor == 7 && <Ponytail7 />}
      {hairColor == 8 && <Ponytail8 />}
      {hairColor == 9 && <Ponytail9 />}
      {hairColor == 10 && <Ponytail10 />}
    </>
  );
}