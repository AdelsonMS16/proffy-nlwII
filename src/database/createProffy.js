module.exports = async function (
  db,
  { proffyValue, classValue, classScheduleValue } // Inserir dados na tabela de proffys
) {
  const insertedProffy = await db.run(`
  INSERT INTO proffys(
    name,
    avatar,
    whatsapp,
    bio
  ) VALUES(
    ${proffyValue.name},
    ${proffyValue.avatar},
    ${proffyValue.whatsapp},
    ${proffyValue.bio}
  );
  `);
  const proffy_id = insertedProffy.lastID;
  //Inserir dados na tabela classes
  const insertedClass = await db.run(`
      INSERT INTO classes(
        subject,
        cost,
        proffy_id
      )VALUES(
        ${classValue.subject},
        ${classValue.cost},
        ${proffy_id}
      );
  `);
  const class_id = insertedProffy.lastID;
  //Inserir dados na tabela class_schedule
};
