import { RequestHandler } from 'express';
import Video from './model'

export const getVideos: RequestHandler = async ( req, res )=>{
    const videos = await Video.find();
    res.json(videos);
}

export const getVideo: RequestHandler = async ( req, res )=>{
    const video = await Video.findById(req.params.id);
    if(!video) return res.status(204).json();
    res.json(video);
}

export  const createVideo: RequestHandler = async ( req, res )=>{
    const videoFound = await Video.findOne({url: req.body.url});
    if(videoFound){
        return res.status(301).json({message: "the URL already exist"})
    }
    const video = new Video(req.body);
    const saveVideo =  await video.save();
    // console.log(saveVideo);
    
    res.json(saveVideo);
}

export const updateVideo: RequestHandler = async ( req, res )=>{
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, { new:true});
    if(!videoUpdate) return res.status(204).json();
    res.json(videoUpdate);
}

export const deleteVideo: RequestHandler = async ( req, res )=>{
    const video = await Video.findByIdAndDelete(req.params.id);
    if(!video) return res.status(204).json();
    res.json(video);
}