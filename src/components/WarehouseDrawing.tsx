"use client"

import { motion, type Variants } from "framer-motion"
import React from "react"
import { palette } from "../assets/styles/palette"

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.25
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

type WarehouseDrawingProps = {
    width?: number | string;
    height?: number | string;
};

export default function WarehouseDrawing({ width = 800, height = 500 }: WarehouseDrawingProps) {
    return (
        <motion.svg
            width={width}
            height={height}
            viewBox="0 0 800 500"
            initial="hidden"
            animate="visible"
            style={image}
        >
            {/* Base */}
            <motion.line
                x1="150" y1="400" x2="650" y2="400"
                stroke={palette.primary}
                variants={draw}
                custom={1}
                style={shape}
            />
            {/* Parede Esquerda */}
            <motion.line
                x1="150" y1="400" x2="150" y2="250"
                stroke={palette.primary}
                variants={draw}
                custom={1.5}
                style={shape}
            />
            {/* Parede Direita */}
            <motion.line
                x1="650" y1="400" x2="650" y2="250"
                stroke={palette.primary}
                variants={draw}
                custom={1.5}
                style={shape}
            />
            {/* Telhado Esquerdo */}
            <motion.line
                x1="150" y1="250" x2="400" y2="150"
                stroke={palette.primary}
                variants={draw}
                custom={2}
                style={shape}
            />
            {/* Telhado Direito */}
            <motion.line
                x1="650" y1="250" x2="400" y2="150"
                stroke={palette.primary}
                variants={draw}
                custom={2}
                style={shape}
            />
            {/* Conexão inferior direita (parede) */}
            <motion.line
                x1="650" y1="400" x2="750" y2="350"
                stroke={palette.primary}
                variants={draw}
                custom={1.2}
                style={shape}
            />
            {/* Conexão superior direita (parede) */}
            <motion.line
                x1="650" y1="250" x2="750" y2="200"
                stroke={palette.primary}
                variants={draw}
                custom={2.2}
                style={shape}
            />
            {/* Conexão superior esquerda (parede)*/}
            <motion.line
                x1="150" y1="250" x2="250" y2="200"
                stroke={palette.primary}
                variants={draw}
                custom={2.2}
                style={shape}
            />
            {/* Viga mestre do telhado (profundidade) */}
            <motion.line
                x1="400" y1="150" x2="500" y2="100"
                stroke={palette.primary}
                variants={draw}
                custom={2.4}
                style={shape}
            />
            <motion.line
                x1="750" y1="350" x2="750" y2="200"
                stroke={palette.primary}
                variants={draw}
                custom={2.6}
                style={shape}
            />
             <motion.line
                x1="250" y1="200" x2="500" y2="100"
                stroke={palette.primary}
                variants={draw}
                custom={2.8}
                style={shape}
            />
             <motion.line
                x1="750" y1="200" x2="500" y2="100"
                stroke={palette.primary}
                variants={draw}
                custom={2.8}
                style={shape}
            />
            <motion.line
                x1="250" y1="400" x2="250" y2="210"
                stroke={palette.primary}
                variants={draw}
                custom={3.5}
                style={shape}
            />
            <motion.line
                x1="350" y1="400" x2="350" y2="170"
                stroke={palette.primary}
                variants={draw}
                custom={3.7}
                style={shape}
            />
            <motion.line
                x1="450" y1="400" x2="450" y2="170"
                stroke={palette.primary}
                variants={draw}
                custom={3.7}
                style={shape}
            />
            <motion.line
                x1="550" y1="400" x2="550" y2="210"
                stroke={palette.primary}
                variants={draw}
                custom={3.5}
                style={shape}
            />
            {/* Vigas do telhado */}
            <motion.line
                x1="275" y1="200" x2="375" y2="150"
                stroke={palette.primary}
                variants={draw}
                custom={4}
                style={shape}
            />
            <motion.line
                x1="525" y1="200" x2="625" y2="150"
                stroke={palette.primary}
                variants={draw}
                custom={4}
                style={shape}
            />
        </motion.svg>
    )
}

const image: React.CSSProperties = {
    maxWidth: "100%",
};

const shape: React.CSSProperties = {
    strokeWidth: 4,
    strokeLinecap: "round",
    fill: "transparent",
};