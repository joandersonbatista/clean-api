import mongoose from 'mongoose';

(async () => {
  await mongoose.connect(process.env.DATABASE_HOST_MONGODB!, {}, (error) => {
    if (error) console.log('deu ruim ' + error);
  });
})();
