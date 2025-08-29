import { useState } from "react";
import { Button } from "../../components/Botones/Button";

export const Settings = () => {
  const [colorChange, setColorChange] = useState(false);

  const saveSettings = () => {
    setTimeout(() => {
      setColorChange(false);
    }, 2000);
    setColorChange(true);
  };

  return (
    <div className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-lg ring-1 ring-gray-700 p-8 space-y-8">
      {/* Título */}
      <h1 className="text-3xl font-bold text-amber-200 border-b border-gray-700 pb-4">
        ⚙ Settings
      </h1>

      {/* Perfil */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-200">Profile</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>
      </section>

      {/* Preferencias */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-200">Preferences</h2>

        <div className="flex items-center justify-between bg-gray-700 px-4 py-3 rounded-lg">
          <span className="text-stone-200">Email Notifications</span>
          <input type="checkbox" className="w-5 h-5 accent-amber-400" />
        </div>
      </section>

      {/* Seguridad */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-stone-200">Security</h2>
        <div className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="New Password"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-amber-400 outline-none"
          />
        </div>
      </section>

      {/* Botón */}
      <div className="flex justify-end">
        {colorChange === false ? (
          <Button fn={saveSettings} nombre="Save"></Button>
        ) : (
          <Button className="bg-green-500" nombre="Saved ✔"></Button>
        )}
      </div>
    </div>
  );
};
