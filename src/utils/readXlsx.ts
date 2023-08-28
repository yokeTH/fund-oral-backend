import { VideoData } from 'interfaces/videoData';
import reader from 'xlsx';
import { readFileSync } from 'fs';

const file = reader.read(readFileSync('./sec1.xlsx'), { type: 'buffer' });

const sheet = file.SheetNames;

const data: VideoData = {};

for (let i = 0; i < sheet.length; i++) {
  const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
  let sec = '0';
  temp.forEach((res: any) => {
    const id = res['Student Email'].slice(0, 10);
    const [lastname, name] = res['Student Name'].split(', ');
    if (res['Section Name']) {
      sec = res['Section Name'].slice(8, 15);
    }
    if (!data[id]) {
      data[id] = {
        name,
        lastname,
        studentID: id,
        sections: {
          [sec]: [],
        },
      };
    }
    data[id]['sections'][sec].push({
      video: res['Class'],
      percentage: res['Video View %'],
    });
  });
}
