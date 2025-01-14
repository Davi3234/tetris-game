import { Rotations } from "../../consts/Rotations";
import { Piece } from "../Piece";
import { GameRules } from "./GameRules";

export class RotationRules{
  gameRules: GameRules;
  constructor(gameRules: GameRules){
    this.gameRules = gameRules;
  }

  rotateLeft(piece: Piece){
    const rotations = [...Rotations];
    const findedRotation = rotations.find(function(rotation){
      return rotation.name == piece.name;
    });

    piece.rotation++;

    if(piece.rotation > piece.maxRotation){
      piece.rotation = 0;
    }

    return findedRotation?.rotations[piece.rotation+1];
  }
  rotateRight(piece: Piece){
    const rotations = [...Rotations];
    const findedRotation = rotations.find(function(rotation){
      return rotation.name == piece.name;
    });

    piece.rotation--;

    if(piece.rotation < 0){
      piece.rotation = 0;
    }

    return findedRotation?.rotations[piece.rotation];
  }

}