import {Router} from 'express';
// import { getVideos } from './controller';
import * as videoController from './controller';
const router = Router();

router.get('/', videoController.getVideos);

router.get('/:id', videoController.getVideo);

router.post('/', videoController.createVideo);

router.put('/:id', videoController.updateVideo);

router.delete('/:id', videoController.deleteVideo);


export default router;