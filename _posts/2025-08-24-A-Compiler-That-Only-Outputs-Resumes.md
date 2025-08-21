---
layout: post
title:  "A Compiler That Only Outputs CVs"
date:   2025-08-21 10:00:00 +0800
description: '"Created a compiler that transpiles Markdown code into résumé PDFs via LaTeX, averaging 7700+ lines per second."'
tags: programming
---

There is something deeply dystopian about writing a CV. If you are asked to produce a summary of the course of your life, the last thing you would do is to typeset your catalogue of milestones, however impressive or idiosyncratic, in 11-point monochromatic Times New Roman. After all, an autobiography constrained to a sheet of paper would never be sufficient to accurately reflect one's true multifaceted self.

With this deep dystopia and its vexations unending, there remains only one feasible and sustainable option: Write your résumé faster, and be done with it forevermore. [This LaTeX template](https://github.com/jakegut/resume), colloquially known as "Jake's Résumé", does the job well by combining a minimalistic résumé layout design with LaTeX's automatic typesetting system. Nonetheless, following this template can prove tedious and repetitive when you have to maintain multiple lengthy versions of the same document each with its own slight variations.

To unload this burden once and for all, I decided to make a [Résumé Compiler](https://github.com/raphaellith/Resume-Compiler). Adopting a modular approach to Jake's Résumé, this project seeks to expedite the composition of a résumé with emphasis on accessibility, readability and maintainability. Given a source directory containing a collection of Markdown files, the source-to-source compiler translates each file into HTML, which is then parsed and transformed into its LaTeX counterpart in accordance with the "Jake's Résumé" layout. The resultant LaTeX files are then automatically converted into a résumé PDF in the destination directory.

Achieving a transpilation rate of over 7700 lines per second, this Résumé Compiler is capable of understanding more than 10 types of markup instructions. Other features include rendering text in 8 different fonts, simultaneous multi-file compilation, and automatic recompilation on file save.

Read the syntax guide on [the project's GitHub page](https://github.com/raphaellith/Resume-Compiler).
