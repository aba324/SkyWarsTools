"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTSWTCard: React.FC = () => {
	return (
		<div className="p-6">
			<Link href={"/tools/mod"}>
				<h2 className="text-2xl font-bold mb-4 text-center">Forge Mod</h2>
				<p className="mb-4 text-center">Check out SkyWarsToolsMod, its features and how to install!</p>

				<div className="flex justify-center">
					<Image src="/logo.png" alt="Counts preview" width={200} height={200} className="py-2 rounded-xl" />
				</div>
			</Link>
		</div>
	);
};

export default CTSWTCard;
