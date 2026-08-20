import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Welcome from "./Welcome";

describe('Welcome', () => {

    test('display welcome message', () => {
        // Arrange
        // - Variable
        const firstname = 'July';
        const lastname = 'Flora';
        const messageWelcome = 'Bienvenue July Flora !';
        // - Rendu du composant a tester
        render(<Welcome firstname={firstname} lastname={lastname} />)

        // Act
        // - Aucun comportement pour ce test

        // Assert
        expect(screen.getByText(messageWelcome)).toBeInTheDocument();
    });
});