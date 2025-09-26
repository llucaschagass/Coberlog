"use client"
import { motion, type Variants } from "framer-motion"
import React from "react"
import '../../../assets/styles/palette.css'

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.25
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { 
                    delay, 
                    type: "spring", 
                    duration: 1.5, 
                    bounce: 0, 
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 2, },
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
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={1}
            />
            {/* Parede Esquerda */}
            <motion.line
                x1="150" y1="400" x2="150" y2="250"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={1.5}
            />
            {/* Parede Direita */}
            <motion.line
                x1="650" y1="400" x2="650" y2="250"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={1.5}
            />
            {/* Telhado Esquerdo */}
            <motion.line
                x1="150" y1="250" x2="400" y2="150"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2}
            />
            {/* Telhado Direito */}
            <motion.line
                x1="650" y1="250" x2="400" y2="150"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2}
            />
            {/* Conexão inferior direita (parede) */}
            <motion.line
                x1="650" y1="400" x2="750" y2="350"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={1.2}
            />
            {/* Conexão superior direita (parede) */}
            <motion.line
                x1="650" y1="250" x2="750" y2="200"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.2}
            />
            {/* Conexão superior esquerda (parede)*/}
            <motion.line
                x1="150" y1="250" x2="250" y2="200"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.2}
            />
            {/* Viga mestre do telhado (profundidade) */}
            <motion.line
                x1="400" y1="150" x2="500" y2="100"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.4}
            />
            <motion.line
                x1="750" y1="350" x2="750" y2="200"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.6}
            />
            <motion.line
                x1="250" y1="200" x2="500" y2="100"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.8}
            />
            <motion.line
                x1="750" y1="200" x2="500" y2="100"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={2.8}
            />
            <motion.line
                x1="250" y1="400" x2="250" y2="210"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={3.5}
            />
            <motion.line
                x1="350" y1="400" x2="350" y2="170"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={3.7}
            />
            <motion.line
                x1="450" y1="400" x2="450" y2="170"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={3.7}
            />
            <motion.line
                x1="550" y1="400" x2="550" y2="210"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={3.5}
            />
            {/* Vigas do telhado */}
            <motion.line
                x1="275" y1="200" x2="375" y2="150"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={4}
            />
            <motion.line
                x1="525" y1="200" x2="625" y2="150"
                style={{ 
                    ...shape, 
                    stroke: 'var(--color-primary)' 
                }}
                variants={draw}
                custom={4}
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